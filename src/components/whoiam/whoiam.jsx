import { React } from 'react';
import PropTypes from 'prop-types';
import myPicture from '../../images/IMG_2233.JPG';

export default function Whoiam({ aboutMe }) {
  const { content } = aboutMe;

  return (
    <section className="about-me" id="bio">
      <section className="image">
        <img src={myPicture} alt="Jesse Shaw in a suit" className="my-picture" title="Me on my wedding day in December 2021" />
      </section>
      <section className="description aboutme-description">
        {content}
      </section>
    </section>
  );
}

Whoiam.defaultProps = {
  aboutMe: {
    content: 'Hi! My name is Jesse Shaw. I am a Full Stack Developer currently working on a Learning Management System application at Amentum. I enjoy coding because I love to create things. I enjoy building things from scratcssh and seeing them come to life. I am always interested in meeting and learning from fellow developers and creatives who have similar mindsets. I love working with people who are not afraid to challenge each other and make the world a better place.',
  },
};

Whoiam.propTypes = {
  aboutMe: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }),
};
