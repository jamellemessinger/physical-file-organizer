import React, { useState } from 'react';

export default function AddFilePanel({ fetchData }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
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
      // simulate slow request
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
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div>AddFilePanel</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" required />
        <label htmlFor="category">Category: </label>
        <input type="text" id="category" required />
        <label htmlFor="location">Location: </label>
        <input type="text" id="location" required />
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? 'Submitting...' : 'Add File'}
        />
      </form>
    </>
  );
}
