import React from 'react'

export default function Landing(props) {
  console.log(props)
  return (
      <>
      <h1>
        Resume
      </h1>
      <div>
        {
          props.content.map((item) => 
            <section>
              <h2>{item.company}</h2>
              <h3>{item.title}</h3>
            </section>
          )
        }
      </div>
      </>
  );
}
