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

const renderImgs = (imgs) => {
  const renderImgs = [];
  imgs.forEach((elem) => {
    renderImgs.push(<img src={elem} height="300" width="300"/>);
  });
  return renderImgs;
};

const multiTimeline = (imgUrls, text) => {
  return (<div>
    <div>
      {this.renderImgs(imgUrls)}
    </div>
    <div>{text}</div>
  </div>);
};


// TODO move this list and sorting into reducer
const sampleTimelineItems = [
  {
    type: 'love',
    date: new Date(2014, 0, 13),
    content: typicalTimeline('assets/ragLogo.jpeg',
    'Our first recorded meeting! This might have not been the first time, but it was the first meetup you RSVPed to =). It must have been destiny! https://www.meetup.com/Random-activity-group-20s/events/157546972/'),
  },
  {
    type: 'time',
    date: new Date(2014, 0, 14),
    content: typicalTimeline('assets/her.jpeg',
    'Our second recorded meeting! We both attended the meetup for the movie Her! I remember you told me a riddle in the theatre! https://www.meetup.com/Random-activity-group-20s/events/158230542/'),
  },
  {
    type: 'game',
    date: new Date(2014, 1, 17),
    content: typicalTimeline('assets/mafia.png',
    'I invite you to come play Mafia, and you came and sat close to me! :D At Nome you did some cool magic tricks to win me over =). https://www.meetup.com/Random-activity-group-20s/events/163166382/'),
  },
  {
    type: 'love',
    date: new Date(2014, 2, 30),
    content: typicalTimeline('assets/onirim.jpeg',
    'This was our first date <3. You brought me cheesecake! We had tacos and played Ghost Blitz, Bananagrams and Oririm! We also watched a bad movie and did other things =).'),
  },
  {
    type: 'time',
    date: new Date(2014, 3, 3),
    content: typicalTimeline('assets/kakao.png',
    'I remember chatting you up on Kakao talk from Cali. Told my mom about you too!'),
  },
  {
    type: 'time',
    date: new Date(2014, 4, 12),
    content: typicalTimeline('assets/gtalk.jpeg',
      'Our first message on gchat! It was a lot easier for me to type on the computer than phone, lol =)'),
  },
  {
    type: 'food',
    date: new Date(2014, 4, 26),
    content: typicalTimeline('assets/jabistro.jpeg',
      'We went for sushi at JaBistro for your birthday! We sat on the patio and ate some yummy crab claw miso soup among other things. The dessert kinda sucked. I secretly took a pic of you, but I think the photo is lost on my old phone =(.'),
  },
  {
    type: 'event',
    date: new Date(2014, 4, 28),
    content: typicalTimeline('assets/lionking.png',
      'We saw Lion King with Josh and Susan for your birthday =). The costumes were amazing! I could feel the love tonight!'),
  },
  {
    type: 'event',
    date: new Date(2014, 9, 1),
    content: typicalTimeline('assets/circus.png',
      'We reunited at the circus =). I\'m glad we booked those tickets! I missed you =)'),
  },
  {
    type: 'event',
    date: new Date(2014, 8, 18),
    content: typicalTimeline('assets/me.png',
      'I send you this handsome picture of myself and you said my skin looks flawless! I didn\'t know it meant so much to you back then ;)'),
  },
  {
    type: 'love',
    date: new Date(2014, 11, 27),
    content: typicalTimeline('assets/iloveyou.jpeg',
      'I told you I love you sometime around here and gave you Fukufuku =). I love you!'),
  },
  {
    type: 'time',
    date: new Date(2015, 0, 14),
    content: typicalTimeline('assets/iloveyou.jpeg',
      'First time you said you love me on gtalk!'),
  },
  {
    type: 'travel',
    date: new Date(2014, 11, 19),
    content: typicalTimeline('assets/tarot.jpeg',
      'We went to the book store and you helped me reach the tarot cards on the top self! =)'),
  },
  {
    type: 'time',
    date: new Date(2015, 2, 14),
    content: typicalTimeline('assets/sauna.jpg',
      'We went to the jjimljibang! I think it was the first time I had bingsu and one of the first times I met your sister!'),
  },
  {
    type: 'food',
    date: new Date(2015, 2, 31),
    content: typicalTimeline('assets/bymark.jpg',
      'We celebrated our date anniversary at Bymark! You didn\'t like it that much, but I thought it was pretty good. Our steaks are better >=).'),
  },
  {
    type: 'sport',
    date: new Date(2015, 3, 5),
    content: typicalTimeline('assets/badminton.jpg',
    'We played badminton! Maybe for the first time together. You\'re pretty good!'),
  },
  {
    type: 'travel',
    date: new Date(2015, 5, 6),
    content: typicalTimeline('assets/winetasting.jpg',
      'We went to Niagara Falls! We played games at the arcade and casino and went wine tasting!'),
  },
  {
    type: 'travel',
    date: new Date(2015, 6, 4),
    content: typicalTimeline('assets/momandme.jpg',
      'We want to my Grandmas house! You met my mom! It was a longggg drive, but we made it.'),
  },
  {
    type: 'event',
    date: new Date(2015, 6, 8),
    content: typicalTimeline('assets/penandteller.jpg',
      'We went to New York City! We saw Pen and Teller too! It was pretty stressful driving x.x'),
  },
  {
    type: 'travel',
    date: new Date(2015, 6, 9),
    content: typicalTimeline('assets/newyork.jpg',
      'We explored New York and then went to the fancy JJimjilbang! It was amazing to relax!'),
  },
  {
    type: 'love',
    date: new Date(2015, 6, 10),
    content: typicalTimeline('assets/castle.jpg',
      'Do you remember when we craved out names in the castle? That was this day!'),
  },
  {
    type: 'travel',
    date: new Date(2015, 7, 1),
    content: typicalTimeline('assets/badcamp.png',
      'We went camping! Never again... We got stormed on and had a bit of a panic...'),
  },
  {
    type: 'time',
    date: new Date(2015, 7, 28),
    content: typicalTimeline('assets/fun.png',
      'We made soap! It lasted over a year!'),
  },
  {
    type: 'food',
    date: new Date(2015, 8, 26),
    content: typicalTimeline('assets/apple.jpg',
      'We went apple picking! We also discovered delicious apple crumble nom nom.'),
  },
  {
    type: 'event',
    date: new Date(2015, 9, 8),
    content: typicalTimeline('assets/painting.jpg',
      'We did our first paint nite! We both made a masterpiece!'),
  },
  {
    type: 'event',
    date: new Date(2015, 9, 10),
    content: typicalTimeline('assets/halloweenhaunt.jpg',
      'We did Halloween Haunt with Andrew and Steph, you were so brave I was so proud!'),
  },
  {
    type: 'food',
    date: new Date(2015, 9, 17),
    content: typicalTimeline('assets/hightea.png',
      'We went for high tea and escape room! I think we still have a coupon for that...'),
  },
  {
    type: 'game',
    date: new Date(2015, 9, 24),
    content: typicalTimeline('assets/escape.jpg',
      'We did an escape room! we escape with 0 time left! Good thing the password was 0000!'),
  },
  {
    type: 'game',
    date: new Date(2015, 10, 14),
    content: typicalTimeline('assets/bohnanza.jpg',
      'You met my cousins for the first time! They really like you. You we\'re trying to hussle them in bonanza =)'),
  },
  {
    type: 'love',
    date: new Date(2015, 10, 30),
    content: typicalTimeline('assets/christmastree30nov.jpg',
      'We set up the christmas tree! It was up for awhile lol'),
  },
  {
    type: 'love',
    date: new Date(2016, 0, 15),
    content: typicalTimeline('assets/fun.png',
      'We took our first dance class together! Do the hustle!'),
  },
  {
    type: 'love',
    date: new Date(2016, 1, 7),
    content: typicalTimeline('assets/fun.png',
      'It was my birthday and you invited all my friends over to play games! Thanks honey!'),
  },
  {
    type: 'love',
    date: new Date(2016, 2, 21),
    content: typicalTimeline('assets/fun.png',
      'We did Yoga together!'),
  },
  {
    type: 'love',
    date: new Date(2016, 3, 3),
    content: typicalTimeline('assets/fun.png',
      'We went tot he yoga show together! I acted like an animal and you watched.'),
  },
  {
    type: 'love',
    date: new Date(2016, 3, 23),
    content: typicalTimeline('assets/fun.png',
      'We went on Kevin Chan\'s wedding cruise!'),
  },
  {
    type: 'love',
    date: new Date(2016, 4, 5),
    content: typicalTimeline('assets/fun.png',
      'We went to Japan!'),
  },
  {
    type: 'love',
    date: new Date(2016, 4, 21),
    content: typicalTimeline('assets/fun.png',
      'We went to Korea!'),
  },
  {
    type: 'love',
    date: new Date(2016, 6, 30),
    content: typicalTimeline('assets/fun.png',
      'We went to my cousin\'s again!'),
  },
  {
    type: 'love',
    date: new Date(2016, 6, 31),
    content: typicalTimeline('assets/fun.png',
      'We went to Zen sushi with your family!'),
  },
  {
    type: 'love',
    date: new Date(2016, 6, 23),
    content: typicalTimeline('assets/fun.png',
      'We went to center island to visit Matt.'),
  },
  {
    type: 'love',
    date: new Date(2016, 6, 1),
    content: typicalTimeline('assets/fun.png',
      'We went tot he cottage with our friends!'),
  },
  {
    type: 'love',
    date: new Date(2016, 7, 12),
    content: typicalTimeline('assets/fun.png',
      'We did the Casa Loma escape room with my coworkers'),
  },
  {
    type: 'love',
    date: new Date(2016, 8, 4),
    content: typicalTimeline('assets/fun.png',
      'We tried to biek near the cottage, it didn\'t work well, lol'),
  },
  {
    type: 'love',
    date: new Date(2016, 8, 11),
    content: typicalTimeline('assets/fun.png',
      'We went apple picking again! The Apple Crumble is amazing!'),
  },
  {
    type: 'love',
    date: new Date(2016, 8, 25),
    content: typicalTimeline('assets/fun.png',
      'We celebrated our anniversay and this timeline was created!'),
  },
  {
    type: 'love',
    date: new Date(2016, 6, 4),
    content: typicalTimeline('assets/fun.png',
      'We went to Wonderland with Bonne! I still wanna frolick ont the beach with you!'),
  },
  {
    type: 'love',
    date: new Date(2015, 4, 9),
    content: typicalTimeline('assets/fun.png',
      'We went to see the cherry blossoms at high park!'),
  },
  {
    type: 'love',
    date: new Date(2015, 7, 27),
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
