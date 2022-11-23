import React from 'react';
import {
  WrapperSlide,
  TitleSlide,
  ContainerSlide,
  Card,
  WrapperCards,
  ImageCard,
  InfoCard,
  BadgeCard,
  DescriptionCard,
  LinkCard,
  WrapperBadges,
} from './styles';

export const Slide = () => {
  return(
    <WrapperSlide>
      <ContainerSlide>
        <TitleSlide> good things </TitleSlide>
        <WrapperCards>
          <Card>
            <ImageCard></ImageCard>
            <InfoCard>
              <WrapperBadges>
                <BadgeCard><p> function </p></BadgeCard>
              </WrapperBadges>

              <DescriptionCard>
                Organize your daily job enhance your life performance
              </DescriptionCard>

              <LinkCard> read more </LinkCard>
            </InfoCard>
          </Card>

          <Card>
            <ImageCard></ImageCard>
            <InfoCard>
              <WrapperBadges>
                <BadgeCard><p> function </p></BadgeCard>
              </WrapperBadges>

              <DescriptionCard>
                Organize your daily job enhance your life performance
              </DescriptionCard>

              <LinkCard> read more </LinkCard>
            </InfoCard>
          </Card>

          <Card>
            <ImageCard></ImageCard>
            <InfoCard>
              <WrapperBadges>
                <BadgeCard><p> function </p></BadgeCard>
              </WrapperBadges>

              <DescriptionCard>
                Organize your daily job enhance your life performance
              </DescriptionCard>

              <LinkCard> read more </LinkCard>
            </InfoCard>
          </Card>
        </WrapperCards>
      </ContainerSlide>
    </WrapperSlide>
  );
};
