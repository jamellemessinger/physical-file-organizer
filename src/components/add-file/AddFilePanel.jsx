import React, { useState, useRef } from 'react';
import sleep from '../../helper-functions/sleep';

export default function AddFilePanel({ fetchData }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dialogRef = useRef(null);

  const openModal = () => {
    dialogRef.current.showModal();
  };

  const closeModal = () => {
    dialogRef.current.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const fileData = {
      title: form['title'].value,
      category: form['category'].value,
      location: form['location'].value,
    };

    try {
      await sleep(2000);

      const response = await fetch('/api/files', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fileData),
      });

      if (!response.ok) {
        throw new Error('Failed to add file');
      }

      fetchData();
      form.reset();
      closeModal();
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* This replaces your old AddFile button handler */}
      <button onClick={openModal}>Add File</button>

      <dialog ref={dialogRef}>
        <h2>Add File</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />

          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" required />

          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" required />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Add File'}
          </button>

          <button type="button" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </dialog>
    </>
  );
}
