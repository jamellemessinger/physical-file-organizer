import React from 'react';

export default function AddFilePanel() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fileData = {
      title: form['title'].value,
      category: form['category'].value,
      location: form['location'].value,
    };
    console.log(fileData);
    e.target.reset();
  };

  return (
    <>
      <div>AddFilePanel</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" required />
        <label htmlFor="category">Category: </label>
        <input type="text" name="category" required />
        <label htmlFor="location">Location: </label>
        <input type="text" name="location" required />
        <input type="submit" />
      </form>
    </>
  );
}
