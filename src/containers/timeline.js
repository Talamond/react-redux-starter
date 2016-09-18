import React from 'react';
import { connect } from 'react-redux';
import Timeline from '../components/timeline';

import Container from '../components/container';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

/* eslint-disable */
const typicalTimeline = (imgUrl, text) => {
  return (<div>
    <div>
      <img src={imgUrl} height="300" width="300"/>
    </div>
    <div>{text}</div>
  </div>);
};

// TODO move this list and sorting into reducer
const sampleTimelineItems = [
  {
    type: 'love',
    date: new Date(2014, 1, 13),
    content: typicalTimeline('assets/fun.png',
    'Our first recorded meeting! This might have not been the first time, but it was the first meetup you RSVPed to =). https://www.meetup.com/Random-activity-group-20s/events/157546972/'),
  },
  {
    type: 'food',
    date: new Date(2014, 1, 14),
    content: typicalTimeline('assets/fun.png',
    'Our second recorded meeting! We both attended the meetup for the movie Her! I remember you told me a riddle in the theatre! https://www.meetup.com/Random-activity-group-20s/events/158230542/'),
  },
  {
    type: 'travel',
    date: new Date(2014, 2, 17),
    content: typicalTimeline('assets/fun.png',
    'I invite you to come play Mafia, and you came and sat close to me! :D At Nome you did some cool magic tricks to win me over =). https://www.meetup.com/Random-activity-group-20s/events/163166382/'),
  },
  {
    type: 'love',
    date: new Date(2014, 3, 30),
    content: typicalTimeline('assets/fun.png',
    'This was our first date <3. You brought me cheesecake! We had tacos and played Ghost Blitz, Bananagrams and Oririm! We also watched a bad movie and did other things =).'),
  },
  {
    type: 'time',
    date: new Date(2014, 4, 3),
    content: typicalTimeline('assets/fun.png',
    'I remember chatting you up on Kakao talk from Cali. Told my mom about you too!'),
  },
  {
    type: 'time',
    date: new Date(2014, 5, 12),
    content: typicalTimeline('assets/fun.png',
      'Our first message on gchat!'),
  },
  {
    type: 'food',
    date: new Date(2014, 5, 26),
    content: typicalTimeline('assets/fun.png',
      'We went for sushi at JaBistro for your birthday!'),
  },
  {
    type: 'travel',
    date: new Date(2014, 5, 28),
    content: typicalTimeline('assets/fun.png',
      'We saw Lion King with Josh and Susan for your birthday =)'),
  },
  {
    type: 'time',
    date: new Date(2014, 10, 1),
    content: typicalTimeline('assets/fun.png',
      'We reunited at the circus =). I\'m glad we booked those tickets!'),
  },
  {
    type: 'sport',
    date: new Date(2014, 9, 18),
    content: typicalTimeline('assets/fun.png',
      'I send you this handsome picture of myself and you said my skin looks flawless!'),
  },
  {
    type: 'love',
    date: new Date(2014, 12, 27),
    content: typicalTimeline('assets/fun.png',
      'I told you I love you sometime around here and gave you Fukufuku =). I love you!'),
  },
  {
    type: 'love',
    date: new Date(2015, 1, 14),
    content: typicalTimeline('assets/fun.png',
      'First time you said you love me on gtalk!'),
  },
  {
    type: 'travel',
    date: new Date(2014, 12, 19),
    content: typicalTimeline('assets/fun.png',
      'We went to the book store and you helped me reach the tarot cards on the top self! It was around this date...'),
  },
  {
    type: 'time',
    date: new Date(2015, 3, 14),
    content: typicalTimeline('assets/fun.png',
      'We went to the jiljibam!'),
  },
  {
    type: 'food',
    date: new Date(2015, 3, 31),
    content: typicalTimeline('assets/fun.png',
      'We celebrated our date anniversary at Bymark!'),
  },
  {
    type: 'love',
    date: new Date(2015, 4, 5),
    content: typicalTimeline('assets/fun.png',
    'We played badminton! Maybe for the first time together.'),
  },
  {
    type: 'travel',
    date: new Date(2015, 6, 6),
    content: typicalTimeline('assets/fun.png',
      'We went to Niagara Falls! We played games at the arcade and casino and went wine tasting!'),
  },
  {
    type: 'travel',
    date: new Date(2015, 7, 4),
    content: typicalTimeline('assets/fun.png',
      'We want to my Grandmas house! You met my mom!'),
  },
  {
    type: 'travel',
    date: new Date(2015, 7, 8),
    content: typicalTimeline('assets/fun.png',
      'We went to New York City! We saw Pen and Teller too!'),
  },
  {
    type: 'love',
    date: new Date(2015, 7, 9),
    content: typicalTimeline('assets/fun.png',
      'We went to the fancy jiljibam! We also craved our names on the castle!'),
  },
  {
    type: 'love',
    date: new Date(2015, 8, 1),
    content: typicalTimeline('assets/fun.png',
      'We went camping! Never again...'),
  },
  {
    type: 'love',
    date: new Date(2015, 8, 28),
    content: typicalTimeline('assets/fun.png',
      'We made soap! It lasted over a year!'),
  },
  {
    type: 'food',
    date: new Date(2015, 9, 26),
    content: typicalTimeline('assets/fun.png',
      'We went apple picking!'),
  },
  {
    type: 'food',
    date: new Date(2015, 10, 7),
    content: typicalTimeline('assets/fun.png',
      'We went to loaded perigoes'),
  },
  {
    type: 'love',
    date: new Date(2015, 10, 8),
    content: typicalTimeline('assets/fun.png',
      'We did our first paint nite! We both made a masterpiece!'),
  },
  {
    type: 'love',
    date: new Date(2015, 10, 10),
    content: typicalTimeline('assets/fun.png',
      'We did Halloween Haunt with Andrew and Steph, you were so brave!'),
  },
  {
    type: 'love',
    date: new Date(2015, 10, 17),
    content: typicalTimeline('assets/fun.png',
      'We went for high tea and escape room!'),
  },
  {
    type: 'love',
    date: new Date(2015, 10, 24),
    content: typicalTimeline('assets/fun.png',
      'We did an escape room! we escape with 0 time left! Good thing the password was 0000!'),
  },
  {
    type: 'love',
    date: new Date(2015, 11, 14),
    content: typicalTimeline('assets/fun.png',
      'You met my cousins for the first time/ They really like you. You we\'re trying to hussle them in bonanza =)'),
  },
  {
    type: 'love',
    date: new Date(2015, 6, 20),
    content: typicalTimeline('assets/fun.png',
      'You met my dad for the first time. He was happy you\'re nice and not crazy!'),
  },
  {
    type: 'love',
    date: new Date(2015, 12, 20),
    content: typicalTimeline('assets/fun.png',
      'We set up the christmas tree! It was up for awhile lol'),
  },
  {
    type: 'love',
    date: new Date(2016, 1, 15),
    content: typicalTimeline('assets/fun.png',
      'We took our first dance class together! Do the hustle!'),
  },
  {
    type: 'love',
    date: new Date(2016, 2, 7),
    content: typicalTimeline('assets/fun.png',
      'It was my birthday and you invited all my friends over to play games! Thanks honey!'),
  },
  {
    type: 'love',
    date: new Date(2016, 3, 21),
    content: typicalTimeline('assets/fun.png',
      'We did Yoga together!'),
  },
  {
    type: 'love',
    date: new Date(2016, 4, 3),
    content: typicalTimeline('assets/fun.png',
      'We went tot he yoga show together! I acted like an animal and you watched.'),
  },
  {
    type: 'love',
    date: new Date(2016, 4, 23),
    content: typicalTimeline('assets/fun.png',
      'We went on Kevin Chan\'s wedding cruise!'),
  },
  {
    type: 'love',
    date: new Date(2016, 5, 5),
    content: typicalTimeline('assets/fun.png',
      'We went to Japan!'),
  },
  {
    type: 'love',
    date: new Date(2016, 5, 21),
    content: typicalTimeline('assets/fun.png',
      'We went to Korea!'),
  },
  {
    type: 'love',
    date: new Date(2016, 7, 30),
    content: typicalTimeline('assets/fun.png',
      'We went to my cousin\'s again!'),
  },
  {
    type: 'love',
    date: new Date(2016, 7, 31),
    content: typicalTimeline('assets/fun.png',
      'We went to Zen sushi with your family!'),
  },
  {
    type: 'love',
    date: new Date(2016, 7, 23),
    content: typicalTimeline('assets/fun.png',
      'We went to center island to visit Matt.'),
  },
  {
    type: 'love',
    date: new Date(2016, 7, 1),
    content: typicalTimeline('assets/fun.png',
      'We went tot he cottage with our friends!'),
  },
  {
    type: 'love',
    date: new Date(2016, 8, 12),
    content: typicalTimeline('assets/fun.png',
      'We did the Casa Loma escape room with my coworkers'),
  },
  {
    type: 'love',
    date: new Date(2016, 9, 4),
    content: typicalTimeline('assets/fun.png',
      'We tried to biek near the cottage, it didn\'t work well, lol'),
  },
  {
    type: 'love',
    date: new Date(2016, 9, 11),
    content: typicalTimeline('assets/fun.png',
      'We went apple picking again! The Apple Crumble is amazing!'),
  },
  {
    type: 'love',
    date: new Date(2016, 9, 25),
    content: typicalTimeline('assets/fun.png',
      'We celebrated our anniversay and this timeline was created!'),
  },
  {
    type: 'love',
    date: new Date(2016, 7, 4),
    content: typicalTimeline('assets/fun.png',
      'We went to Wonderland with Bonne! I still wanna frolick ont the beach with you!'),
  },
  {
    type: 'love',
    date: new Date(2015, 5, 9),
    content: typicalTimeline('assets/fun.png',
      'We went to see the cherry blossoms at high park!'),
  },
  {
    type: 'love',
    date: new Date(2015, 8, 27),
    content: typicalTimeline('assets/fun.png',
      'I moved in! That was a stressful day, but I got it done and life has never been better ever since!'),
  },
];

function TimelinePage() {
  sampleTimelineItems.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    } else if (a.date > b.date) {
      return 1;
    }
    return 0;
  });
  return (
    <Container size={4} center>
      <Timeline items={sampleTimelineItems} selectedIndex={0}/>
    </Container>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimelinePage);
