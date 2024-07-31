import React from 'react';

export default function ResumeSection(item) {
  return (
    <section className="card my-2 p-3" key={item.company}>
    <h2>{item.company}</h2>

    <h3>{item.title}</h3>
    <h4>
      {item.start_date}
      -
      {
      item.end_date ? item.end_date : 'Present'
      }
    </h4>

    <div>
      <ul>
        {item.bullet_points.map((val) => <li>{val}</li>)}
      </ul>
    </div>
  </section>
  );
}
