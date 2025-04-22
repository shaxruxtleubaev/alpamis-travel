import React, { useState } from 'react';

export default function Admin() {
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState('');

  const handleFilesChange = (e) => {
    const selected = Array.from(e.target.files).slice(0, 10);
    setFiles(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь позже будет POST на Flask API
    console.log({ files, description });
  };

  return (
    <div className="admin-panel">
      <h2>Админ-панель</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Загрузить до 10 фото/видео:
          <input
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFilesChange}
          />
        </label>
        <label>
          Описание места:
          <textarea
            rows="5"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Добавить место</button>
      </form>
    </div>
  );
}
