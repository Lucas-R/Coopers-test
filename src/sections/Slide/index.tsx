import React from 'react';
import SlideOne from './../../assets/images/slide-one.png';
import SlideTwo from './../../assets/images/slide-two.png';
import SlideThree from './../../assets/images/slide-three.png';
import {
  ContainerSlide,
  WrapperSlide,
  TitleSlide,
  Carousel,
  Inner,
  WrapperDots,
  Dot,

  WrapperCard,
  ImageCard,
  BodyCard,
  WrapperBadgesCard,
  BadgeCard,
  DescriptionCard,
  LinkCard
} from './styles';
import { CardProps } from './types';

const Card = ({img, badges, description, link}: CardProps) => {
  return(
    <WrapperCard>
      <ImageCard img={img}/>
      <BodyCard>
        <WrapperBadgesCard>
          {
            badges.map(badge => <BadgeCard key={badge}>{ badge }</BadgeCard>)
          }
        </WrapperBadgesCard>
        <DescriptionCard>{ description }</DescriptionCard>
        <LinkCard href={link}> read more </LinkCard>
      </BodyCard>
    </WrapperCard>
  );
};

export const Slide = () => {

  const data = [
    {
      image: SlideOne,
      badge: ['function'],
      description: 'Organize your daily job enhance your life performance',
      link: 'www.github.com/Lucas-R'
    },
    {
      image: SlideTwo,
      badge: ['function'],
      description: 'Mark one activity as done makes your brain understands the power of doing.',
      link: 'www.github.com/Lucas-R'
    },
    {
      image: SlideThree,
      badge: ['function'],
      description: 'Careful with missunderstanding the difference between a list of things and a list of desires.',
      link: 'www.github.com/Lucas-R'
    }
  ];

  return(
    <WrapperSlide>
      <ContainerSlide>
        <TitleSlide> good things </TitleSlide>
        <Carousel>
          <Inner>
            {
              data.map((item, index) => {
                return(
                  <Card
                    key={index}
                    img={item.image}
                    badges={item.badge}
                    description={item.description}
                    link={item.link}
                  />
                );
              })
            };
          </Inner>
          <WrapperDots>
            <Dot active={true} />
            <Dot active={false}/>
            <Dot active={false}/>
          </WrapperDots>
        </Carousel>
      </ContainerSlide>
    </WrapperSlide>
  );
};
