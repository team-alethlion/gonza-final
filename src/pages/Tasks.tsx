import React from 'react';
import { Tabs } from '@/components/ui/tabs';
import { useTasks } from '@/hooks/useTasks';
import { useTaskCategories } from '@/hooks/useTaskCategories';
import { useAuth } from '@/components/auth/AuthProvider';
import { useTaskPageLogic } from '@/hooks/useTaskPageLogic';
import TaskForm from '@/components/tasks/TaskForm';
import TaskPageHeader from '@/components/tasks/TaskPageHeader';
import TaskTabNavigation from '@/components/tasks/TaskTabNavigation';
import TaskPageContent from '@/components/tasks/TaskPageContent';
import { useProfiles } from '@/contexts/ProfileContext';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Tasks = () => {
  const { user } = useAuth();
  const { hasPermission, isLoading: profilesLoading } = useProfiles();
  const navigate = useNavigate();

  // Permissions
  const canView = hasPermission('tasks', 'view');
  const canCreate = hasPermission('tasks', 'create');
  const canEdit = hasPermission('tasks', 'edit');
  const canDelete = hasPermission('tasks', 'delete');

  // Use error boundaries for hooks
  let tasksData;
  let categoriesData;

  try {
    tasksData = useTasks();
  } catch (error) {
    console.error('Error in useTasks:', error);
    tasksData = { tasks: [], isLoading: false, createTask: async () => null, updateTask: async () => false, deleteTask: async () => false, toggleTaskCompletion: async () => false, bulkUpdateTasks: async () => false };
  }

  try {
    categoriesData = useTaskCategories();
  } catch (error) {
    console.error('Error in useTaskCategories:', error);
    categoriesData = { categories: [], createDefaultCategories: async () => { } };
  }

  const { tasks, isLoading, createTask, updateTask, deleteTask, toggleTaskCompletion, bulkUpdateTasks } = tasksData;
  const { categories, createDefaultCategories } = categoriesData;

  const taskPageLogic = useTaskPageLogic({
    tasks,
    createTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion,
    bulkUpdateTasks,
  });

  // Create default categories on first load if none exist
  React.useEffect(() => {
    if (categories.length === 0 && !isLoading) {
      createDefaultCategories();
    }
  }, [categories.length, isLoading, createDefaultCategories]);

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-md">
          <p className="text-amber-800">
            You need to be signed in to manage your tasks. All tasks are saved to your account.
          </p>
        </div>
      </div>
    );
  }

  if (profilesLoading || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!canView) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Access Denied</AlertTitle>
          <AlertDescription>
            You do not have permission to view the tasks module.
            Please contact your administrator if you believe this is an error.
          </AlertDescription>
        </Alert>
        <div className="mt-4">
          <Button onClick={() => navigate('/')} variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <TaskPageHeader
        pendingTodayTasksCount={taskPageLogic.pendingTodayTasks.length}
        totalTasksCount={tasks.length}
        onCreateTask={taskPageLogic.handleCreateTask}
        canCreate={canCreate}
      />

      <Tabs value={taskPageLogic.activeTab} onValueChange={taskPageLogic.setActiveTab} className="space-y-6">
        <TaskTabNavigation activeTab={taskPageLogic.activeTab} />

        <TaskPageContent
          tasks={tasks}
          todayTasks={taskPageLogic.todayTasks}
          onToggleComplete={taskPageLogic.toggleTaskCompletion}
          onEdit={taskPageLogic.handleEditTask}
          onDelete={taskPageLogic.handleDeleteTask}
          onBulkComplete={taskPageLogic.handleBulkComplete}
          onCreateTask={taskPageLogic.handleCreateTask}
          canCreate={canCreate}
          canEdit={canEdit}
          canDelete={canDelete}
        />
      </Tabs>

      <TaskForm
        isOpen={taskPageLogic.isTaskFormOpen}
        onClose={taskPageLogic.handleFormClose}
        onSubmit={taskPageLogic.handleFormSubmit}
        task={taskPageLogic.editingTask}
        initialDate={taskPageLogic.selectedDate || undefined}
      />
    </div>
  );
};

export default Tasks;
