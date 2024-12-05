export const getUsers = async () => {
    return [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
    ];
  };
  
  export const getRoles = async () => {
    return [
      { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
      { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
    ];
  };
  