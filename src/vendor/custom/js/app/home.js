const deleteTodo = async (_id) => {
  if (confirm("Do you want to remove this todo?")) {
    await fetch(`/api/app/delete/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        csrf: window.token
      }),
    });

    window.location.reload();
  }
};
