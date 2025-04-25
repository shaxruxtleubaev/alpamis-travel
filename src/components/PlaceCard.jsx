import React from 'react';

export default function PlaceCard({ place }) {
  return (
    <div className="place-card">
      {place.media && place.media.length > 0 && (
        <div className="media-preview">
          {place.media.map((m, i) =>
            m.type === 'video' ? (
              <video key={i} controls src={m.url} />
            ) : (
              <img key={i} src={m.url} alt={place.title} />
            )
          )}
        </div>
      )}
      <h3>{place.title}</h3>
      <p style={{ whiteSpace: 'pre-line' }}>{place.description}</p>
    </div>
  );
}
