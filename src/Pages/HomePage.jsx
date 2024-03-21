import React from "react";
import styles from "../scss/HomePage.module.scss";
import {
  Box,
  Grid,
  UnstyledButton,
  Image,
  Spoiler,
  TextInput,
  Button,
} from "@mantine/core";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.upcomingEvent}>
          <div className={styles.upcomingEventTitle}>Upcoming Events!</div>
          <div className={styles.upcomingEventContent}>
            <ul className={styles.events}>
              <li>dsadsadsadsadsadsd</li>
              <li>dsadasdsdsdadad</li>
              <li>dsadasdsadasdsadadsadsadsadasdsa</li>
              <li>dsadssadadsadasdsadasdasdasdsa</li>
              <li>ddsdssdsdwqdssadaas</li>
            </ul>
            <UnstyledButton className={styles.calendar}>
              <Image src="/Images/calendar_color_logo.png" />
            </UnstyledButton>
          </div>
        </div>
        <div className={styles.friendSuggestion}>
          <div className={styles.friendSuggestionTitle}>
            People you may know
          </div>

          <div className={styles.friendSuggestionList}>
            <div className={styles.friendSuggestionPerson}>
              <Image
                className={styles.friendSuggestionImage}
                src="/Images/profile_logo.jpeg"></Image>
              <div className={styles.friendSuggestionPersonContent}>
                <div className={styles.friendSuggestionPersonName}>
                  วี่หว่อง หว่องวี่
                </div>
                <div className={styles.friendSuggestionPersonMutual}>
                  2 mutual friends
                </div>
                <div className={styles.friendSuggestionPersonInteraction}>
                  <div style={{ width: 110 }}>
                    <Button
                      fullWidth
                      variant="filled"
                      color="green"
                      radius="xl"
                      component="a">
                      Add friend
                    </Button>
                  </div>
                  <div style={{ width: 110 }}>
                    <Button
                      fullWidth
                      variant="filled"
                      color="grey"
                      radius="xl"
                      component="a">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.friendSuggestionPerson}>
              <Image
                className={styles.friendSuggestionImage}
                src="/Images/profile_logo.jpeg"></Image>
              <div className={styles.friendSuggestionPersonContent}>
                <div className={styles.friendSuggestionPersonName}>
                  วี่หว่อง หว่องวี่
                </div>
                <div className={styles.friendSuggestionPersonMutual}>
                  2 mutual friends
                </div>
                <div className={styles.friendSuggestionPersonInteraction}>
                  <div style={{ width: 110 }}>
                    <Button
                      fullWidth
                      variant="filled"
                      color="green"
                      radius="xl"
                      component="a">
                      Add friend
                    </Button>
                  </div>
                  <div style={{ width: 110 }}>
                    <Button
                      fullWidth
                      variant="filled"
                      color="grey"
                      radius="xl"
                      component="a">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className={styles.friendSuggestionPerson}>
              <Image
                className={styles.friendSuggestionImage}
                src="/Images/profile_logo.jpeg"></Image>
              <div className={styles.friendSuggestionPersonContent}>
                <div className={styles.friendSuggestionPersonName}>
                  วี่หว่อง หว่องวี่
                </div>
                <div className={styles.friendSuggestionPersonMutual}>
                  2 mutual friends
                </div>
                <div className={styles.friendSuggestionPersonInteraction}>
                  <div style={{ width: 110 }}>
                    <Button
                      fullWidth
                      variant="filled"
                      color="green"
                      radius="xl"
                      component="a">
                      Add friend
                    </Button>
                  </div>
                  <div style={{ width: 110 }}>
                    <Button
                      fullWidth
                      variant="filled"
                      color="grey"
                      radius="xl"
                      component="a">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.post}>
          <div className={styles.postProfile}>
            <UnstyledButton>
              <Image
                src="/Images/profile_logo.jpeg"
                className={styles.postProfileImage}
              />
            </UnstyledButton>
            <div className={styles.postProfileContent}>
              <div className={styles.postProfileName}>วี่หว่อง หว่องวี่</div>
              <div className={styles.postProfileDate}>1 Jan 2024</div>
            </div>
          </div>
          <Spoiler
            showLabel="Show more"
            hideLabel="Hide"
            maxHeight={125}
            padding={20}
            className={styles.postText}>
            I'm baby occupy meditation authentic PBR&B prism, banjo etsy
            normcore sartorial franzen umami subway tile. Disrupt wayfarers
            lo-fi, bruh art party photo booth tilde man bun. Cred crucifix af
            mustache, direct trade tofu kombucha praxis. Freegan chartreuse
            enamel pin master cleanse bruh, kickstarter microdosing you probably
            haven't heard of them vexillologist migas franzen unicorn DIY
            kinfolk. Tilde hoodie pug microdosing squid PBR&B 90's. Yes plz
            skateboard poke enamel pin kitsch bushwick. Meditation franzen kale
            chips, art party YOLO artisan seitan sustainable stumptown yr banh
            mi Venmo letterpress coloring book, vice chartreuse tattooed umami
            literally forage JOMO direct trade helvetica ennui cray taiyaki.
            Williamsburg jianbing pork belly hella. Put a bird on it banjo raw
            denim, 90's semiotics echo park cornhole keffiyeh tattooed JOMO
            slow-carb pork belly try-hard kickstarter ugh. Dreamcatcher
            sustainable copper mug, hell of retro quinoa same VHS selvage
            chambray. Church-key vaporware lo-fi sus vice kinfolk schlitz art
            party skateboard tacos vape. Activated charcoal thundercats retro
            salvia green juice paleo irony vape vinyl affogato fingerstache
            mustache polaroid neutra. Coloring book organic tumeric jean shorts
            deep v aesthetic pok pok everyday carry, food truck paleo gochujang
            shabby chic wayfarers before they sold out.
          </Spoiler>
          <Image
            className={styles.postImage}
            src="/Images/post1_image.png"></Image>
          <div className={styles.postInteraction}>
            <UnstyledButton>
              <Image
                src="/Images/inactivelike_logo.png"
                className={styles.postInteractionIcon}
              />
            </UnstyledButton>
            <UnstyledButton>
              <Image
                src="/Images/comment_logo.png"
                className={styles.postInteractionIcon}
              />
            </UnstyledButton>
            <UnstyledButton>
              <Image
                src="/Images/sendto_logo.png"
                className={styles.postInteractionIcon}
              />
            </UnstyledButton>
            <UnstyledButton>
              <Image
                src="/Images/repost_logo.png"
                className={styles.postInteractionIcon}
              />
            </UnstyledButton>
          </div>
          <div className={styles.postCommentContainer}>
            <div className={styles.postComment}>
              <UnstyledButton>
                <Image
                  src="/Images/profile_logo.jpeg"
                  className={styles.postCommentImage}
                />
              </UnstyledButton>
              <div className={styles.postCommentContent}>
                <div className={styles.postCommentName}>วี่หว่อง หว่องวี่</div>
                <Spoiler
                  showLabel="Show more"
                  hideLabel="Hide"
                  maxHeight={125}
                  padding={20}
                  className={styles.postCommentComment}>
                  I'm baby occupy meditation authentic PBR&B prism, banjo etsy
                  normcore sartorial franzen umami subway tile. Disrupt
                  wayfarers lo-fi, bruh art party photo booth tilde man bun.
                  Cred crucifix af mustache, direct trade tofu kombucha praxis.
                  Freegan chartreuse enamel pin master cleanse bruh, kickstarter
                  microdosing you probably haven't heard of them vexillologist
                  migas franzen unicorn DIY kinfolk. Tilde hoodie pug
                  microdosing squid PBR&B 90's. Yes plz skateboard poke enamel
                  pin kitsch bushwick. Meditation franzen kale chips, art party
                  YOLO artisan seitan sustainable stumptown yr banh mi Venmo
                  letterpress coloring book, vice chartreuse tattooed umami
                  literally forage JOMO direct trade helvetica ennui cray
                  taiyaki. Williamsburg jianbing pork belly hella. Put a bird on
                  it banjo raw denim, 90's semiotics echo park cornhole keffiyeh
                  tattooed JOMO slow-carb pork belly try-hard kickstarter ugh.
                  Dreamcatcher sustainable copper mug, hell of retro quinoa same
                  VHS selvage chambray. Church-key vaporware lo-fi sus vice
                  kinfolk schlitz art party skateboard tacos vape. Activated
                  charcoal thundercats retro salvia green juice paleo irony vape
                  vinyl affogato fingerstache mustache polaroid neutra. Coloring
                  book organic tumeric jean shorts deep v aesthetic pok pok
                  everyday carry, food truck paleo gochujang shabby chic
                  wayfarers before they sold out.
                </Spoiler>
              </div>
            </div>

            <div className={styles.postComment}>
              <UnstyledButton>
                <Image
                  src="/Images/profile_logo.jpeg"
                  className={styles.postCommentImage}
                />
              </UnstyledButton>
              <div className={styles.postCommentContent}>
                <div className={styles.postCommentName}>วี่หว่อง หว่องวี่</div>
                <Spoiler
                  showLabel="Show more"
                  hideLabel="Hide"
                  maxHeight={125}
                  padding={20}
                  className={styles.postCommentComment}>
                  I'm baby occupy meditation authentic PBR&B prism, banjo etsy
                  normcore sartorial franzen umami subway tile. Disrupt
                  wayfarers lo-fi, bruh art party photo booth tilde man bun.
                  Cred crucifix af mustache, direct trade tofu kombucha praxis.
                  Freegan chartreuse enamel pin master cleanse bruh, kickstarter
                  microdosing you probably haven't heard of them vexillologist
                  migas franzen unicorn DIY kinfolk. Tilde hoodie pug
                  microdosing squid PBR&B 90's. Yes plz skateboard poke enamel
                  pin kitsch bushwick. Meditation franzen kale chips, art party
                  YOLO artisan seitan sustainable stumptown yr banh mi Venmo
                  letterpress coloring book, vice chartreuse tattooed umami
                  literally forage JOMO direct trade helvetica ennui cray
                  taiyaki. Williamsburg jianbing pork belly hella. Put a bird on
                  it banjo raw denim, 90's semiotics echo park cornhole keffiyeh
                  tattooed JOMO slow-carb pork belly try-hard kickstarter ugh.
                  Dreamcatcher sustainable copper mug, hell of retro quinoa same
                  VHS selvage chambray. Church-key vaporware lo-fi sus vice
                  kinfolk schlitz art party skateboard tacos vape. Activated
                  charcoal thundercats retro salvia green juice paleo irony vape
                  vinyl affogato fingerstache mustache polaroid neutra. Coloring
                  book organic tumeric jean shorts deep v aesthetic pok pok
                  everyday carry, food truck paleo gochujang shabby chic
                  wayfarers before they sold out.
                </Spoiler>
              </div>
            </div>
            <TextInput
              className={styles.postCommentInput}
              placeholder="Add Comment"
              radius={"30px"}
              color="#eeeeee"
            />
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.postProfile}>
            <UnstyledButton>
              <Image
                src="/Images/profile_logo.jpeg"
                className={styles.postProfileImage}
              />
            </UnstyledButton>
            <div className={styles.postProfileContent}>
              <div className={styles.postProfileName}>วี่หว่อง หว่องวี่</div>
              <div className={styles.postProfileDate}>1 Jan 2024</div>
            </div>
          </div>
          <Spoiler
            showLabel="Show more"
            hideLabel="Hide"
            maxHeight={125}
            padding={20}
            className={styles.postText}>
            I'm baby occupy meditation authentic PBR&B prism, banjo etsy
            normcore sartorial franzen umami subway tile. Disrupt wayfarers
            lo-fi, bruh art party photo booth tilde man bun. Cred crucifix af
            mustache, direct trade tofu kombucha praxis. Freegan chartreuse
            enamel pin master cleanse bruh, kickstarter microdosing you probably
            haven't heard of them vexillologist migas franzen unicorn DIY
            kinfolk. Tilde hoodie pug microdosing squid PBR&B 90's. Yes plz
            skateboard poke enamel pin kitsch bushwick. Meditation franzen kale
            chips, art party YOLO artisan seitan sustainable stumptown yr banh
            mi Venmo letterpress coloring book, vice chartreuse tattooed umami
            literally forage JOMO direct trade helvetica ennui cray taiyaki.
            Williamsburg jianbing pork belly hella. Put a bird on it banjo raw
            denim, 90's semiotics echo park cornhole keffiyeh tattooed JOMO
            slow-carb pork belly try-hard kickstarter ugh. Dreamcatcher
            sustainable copper mug, hell of retro quinoa same VHS selvage
            chambray. Church-key vaporware lo-fi sus vice kinfolk schlitz art
            party skateboard tacos vape. Activated charcoal thundercats retro
            salvia green juice paleo irony vape vinyl affogato fingerstache
            mustache polaroid neutra. Coloring book organic tumeric jean shorts
            deep v aesthetic pok pok everyday carry, food truck paleo gochujang
            shabby chic wayfarers before they sold out.
          </Spoiler>
          <Image
            className={styles.postImage}
            src="/Images/post2_image.webp"></Image>
          <div className={styles.postInteraction}>
            <UnstyledButton>
              <Image
                src="/Images/inactivelike_logo.png"
                className={styles.postInteractionIcon}
              />
            </UnstyledButton>
            <UnstyledButton>
              <Image
                src="/Images/comment_logo.png"
                className={styles.postInteractionIcon}
              />
            </UnstyledButton>
            <UnstyledButton>
              <Image
                src="/Images/sendto_logo.png"
                className={styles.postInteractionIcon}
              />
            </UnstyledButton>
            <UnstyledButton>
              <Image
                src="/Images/repost_logo.png"
                className={styles.postInteractionIcon}
              />
            </UnstyledButton>
          </div>
          <div className={styles.postCommentContainer}>
            <div className={styles.postComment}>
              <UnstyledButton>
                <Image
                  src="/Images/profile_logo.jpeg"
                  className={styles.postCommentImage}
                />
              </UnstyledButton>
              <div className={styles.postCommentContent}>
                <div className={styles.postCommentName}>วี่หว่อง หว่องวี่</div>
                <Spoiler
                  showLabel="Show more"
                  hideLabel="Hide"
                  maxHeight={125}
                  padding={20}
                  className={styles.postCommentComment}>
                  I'm baby occupy meditation authentic PBR&B prism, banjo etsy
                  normcore sartorial franzen umami subway tile. Disrupt
                  wayfarers lo-fi, bruh art party photo booth tilde man bun.
                  Cred crucifix af mustache, direct trade tofu kombucha praxis.
                  Freegan chartreuse enamel pin master cleanse bruh, kickstarter
                  microdosing you probably haven't heard of them vexillologist
                  migas franzen unicorn DIY kinfolk. Tilde hoodie pug
                  microdosing squid PBR&B 90's. Yes plz skateboard poke enamel
                  pin kitsch bushwick. Meditation franzen kale chips, art party
                  YOLO artisan seitan sustainable stumptown yr banh mi Venmo
                  letterpress coloring book, vice chartreuse tattooed umami
                  literally forage JOMO direct trade helvetica ennui cray
                  taiyaki. Williamsburg jianbing pork belly hella. Put a bird on
                  it banjo raw denim, 90's semiotics echo park cornhole keffiyeh
                  tattooed JOMO slow-carb pork belly try-hard kickstarter ugh.
                  Dreamcatcher sustainable copper mug, hell of retro quinoa same
                  VHS selvage chambray. Church-key vaporware lo-fi sus vice
                  kinfolk schlitz art party skateboard tacos vape. Activated
                  charcoal thundercats retro salvia green juice paleo irony vape
                  vinyl affogato fingerstache mustache polaroid neutra. Coloring
                  book organic tumeric jean shorts deep v aesthetic pok pok
                  everyday carry, food truck paleo gochujang shabby chic
                  wayfarers before they sold out.
                </Spoiler>
              </div>
            </div>

            <div className={styles.postComment}>
              <UnstyledButton>
                <Image
                  src="/Images/profile_logo.jpeg"
                  className={styles.postCommentImage}
                />
              </UnstyledButton>
              <div className={styles.postCommentContent}>
                <div className={styles.postCommentName}>วี่หว่อง หว่องวี่</div>
                <Spoiler
                  showLabel="Show more"
                  hideLabel="Hide"
                  maxHeight={125}
                  padding={20}
                  className={styles.postCommentComment}>
                  I'm baby occupy meditation authentic PBR&B prism, banjo etsy
                  normcore sartorial franzen umami subway tile. Disrupt
                  wayfarers lo-fi, bruh art party photo booth tilde man bun.
                  Cred crucifix af mustache, direct trade tofu kombucha praxis.
                  Freegan chartreuse enamel pin master cleanse bruh, kickstarter
                  microdosing you probably haven't heard of them vexillologist
                  migas franzen unicorn DIY kinfolk. Tilde hoodie pug
                  microdosing squid PBR&B 90's. Yes plz skateboard poke enamel
                  pin kitsch bushwick. Meditation franzen kale chips, art party
                  YOLO artisan seitan sustainable stumptown yr banh mi Venmo
                  letterpress coloring book, vice chartreuse tattooed umami
                  literally forage JOMO direct trade helvetica ennui cray
                  taiyaki. Williamsburg jianbing pork belly hella. Put a bird on
                  it banjo raw denim, 90's semiotics echo park cornhole keffiyeh
                  tattooed JOMO slow-carb pork belly try-hard kickstarter ugh.
                  Dreamcatcher sustainable copper mug, hell of retro quinoa same
                  VHS selvage chambray. Church-key vaporware lo-fi sus vice
                  kinfolk schlitz art party skateboard tacos vape. Activated
                  charcoal thundercats retro salvia green juice paleo irony vape
                  vinyl affogato fingerstache mustache polaroid neutra. Coloring
                  book organic tumeric jean shorts deep v aesthetic pok pok
                  everyday carry, food truck paleo gochujang shabby chic
                  wayfarers before they sold out.
                </Spoiler>
              </div>
            </div>
            <TextInput
              className={styles.postCommentInput}
              placeholder="Add Comment"
              radius={"30px"}
              color="#eeeeee"
            />
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.postProfile}>
            <UnstyledButton>
              <Image
                src="/Images/profile_logo.jpeg"
                className={styles.postProfileImage}
              />
            </UnstyledButton>
            <div className={styles.postProfileContent}>
              <div className={styles.postProfileName}>วี่หว่อง หว่องวี่</div>
              <div className={styles.postProfileDate}>1 Jan 2024</div>
            </div>
          </div>
          <Spoiler
            showLabel="Show more"
            hideLabel="Hide"
            maxHeight={125}
            padding={20}
            className={styles.postText}>
            I'm baby occupy meditation authentic PBR&B prism, banjo etsy
            normcore sartorial franzen umami subway tile. Disrupt wayfarers
            lo-fi, bruh art party photo booth tilde man bun. Cred crucifix af
            mustache, direct trade tofu kombucha praxis. Freegan chartreuse
            enamel pin master cleanse bruh, kickstarter microdosing you probably
            haven't heard of them vexillologist migas franzen unicorn DIY
            kinfolk. Tilde hoodie pug microdosing squid PBR&B 90's. Yes plz
            skateboard poke enamel pin kitsch bushwick. Meditation franzen kale
            chips, art party YOLO artisan seitan sustainable stumptown yr banh
            mi Venmo letterpress coloring book, vice chartreuse tattooed umami
            literally forage JOMO direct trade helvetica ennui cray taiyaki.
            Williamsburg jianbing pork belly hella. Put a bird on it banjo raw
            denim, 90's semiotics echo park cornhole keffiyeh tattooed JOMO
            slow-carb pork belly try-hard kickstarter ugh. Dreamcatcher
            sustainable copper mug, hell of retro quinoa same VHS selvage
            chambray. Church-key vaporware lo-fi sus vice kinfolk schlitz art
            party skateboard tacos vape. Activated charcoal thundercats retro
            salvia green juice paleo irony vape vinyl affogato fingerstache
            mustache polaroid neutra. Coloring book organic tumeric jean shorts
            deep v aesthetic pok pok everyday carry, food truck paleo gochujang
            shabby chic wayfarers before they sold out.
          </Spoiler>
          <Image
            className={styles.postImage}
            src="/Images/post3_image.jpeg"></Image>
          <div className={styles.postInteraction}>
            <UnstyledButton>
              <Image
                src="/Images/inactivelike_logo.png"
                className={styles.postInteractionIcon}
              />
            </UnstyledButton>
            <UnstyledButton>
              <Image
                src="/Images/comment_logo.png"
                className={styles.postInteractionIcon}
              />
            </UnstyledButton>
            <UnstyledButton>
              <Image
                src="/Images/sendto_logo.png"
                className={styles.postInteractionIcon}
              />
            </UnstyledButton>
            <UnstyledButton>
              <Image
                src="/Images/repost_logo.png"
                className={styles.postInteractionIcon}
              />
            </UnstyledButton>
          </div>
          <div className={styles.postCommentContainer}>
            <div className={styles.postComment}>
              <UnstyledButton>
                <Image
                  src="/Images/profile_logo.jpeg"
                  className={styles.postCommentImage}
                />
              </UnstyledButton>
              <div className={styles.postCommentContent}>
                <div className={styles.postCommentName}>วี่หว่อง หว่องวี่</div>
                <Spoiler
                  showLabel="Show more"
                  hideLabel="Hide"
                  maxHeight={125}
                  padding={20}
                  className={styles.postCommentComment}>
                  I'm baby occupy meditation authentic PBR&B prism, banjo etsy
                  normcore sartorial franzen umami subway tile. Disrupt
                  wayfarers lo-fi, bruh art party photo booth tilde man bun.
                  Cred crucifix af mustache, direct trade tofu kombucha praxis.
                  Freegan chartreuse enamel pin master cleanse bruh, kickstarter
                  microdosing you probably haven't heard of them vexillologist
                  migas franzen unicorn DIY kinfolk. Tilde hoodie pug
                  microdosing squid PBR&B 90's. Yes plz skateboard poke enamel
                  pin kitsch bushwick. Meditation franzen kale chips, art party
                  YOLO artisan seitan sustainable stumptown yr banh mi Venmo
                  letterpress coloring book, vice chartreuse tattooed umami
                  literally forage JOMO direct trade helvetica ennui cray
                  taiyaki. Williamsburg jianbing pork belly hella. Put a bird on
                  it banjo raw denim, 90's semiotics echo park cornhole keffiyeh
                  tattooed JOMO slow-carb pork belly try-hard kickstarter ugh.
                  Dreamcatcher sustainable copper mug, hell of retro quinoa same
                  VHS selvage chambray. Church-key vaporware lo-fi sus vice
                  kinfolk schlitz art party skateboard tacos vape. Activated
                  charcoal thundercats retro salvia green juice paleo irony vape
                  vinyl affogato fingerstache mustache polaroid neutra. Coloring
                  book organic tumeric jean shorts deep v aesthetic pok pok
                  everyday carry, food truck paleo gochujang shabby chic
                  wayfarers before they sold out.
                </Spoiler>
              </div>
            </div>

            <div className={styles.postComment}>
              <UnstyledButton>
                <Image
                  src="/Images/profile_logo.jpeg"
                  className={styles.postCommentImage}
                />
              </UnstyledButton>
              <div className={styles.postCommentContent}>
                <div className={styles.postCommentName}>วี่หว่อง หว่องวี่</div>
                <Spoiler
                  showLabel="Show more"
                  hideLabel="Hide"
                  maxHeight={125}
                  padding={20}
                  className={styles.postCommentComment}>
                  I'm baby occupy meditation authentic PBR&B prism, banjo etsy
                  normcore sartorial franzen umami subway tile. Disrupt
                  wayfarers lo-fi, bruh art party photo booth tilde man bun.
                  Cred crucifix af mustache, direct trade tofu kombucha praxis.
                  Freegan chartreuse enamel pin master cleanse bruh, kickstarter
                  microdosing you probably haven't heard of them vexillologist
                  migas franzen unicorn DIY kinfolk. Tilde hoodie pug
                  microdosing squid PBR&B 90's. Yes plz skateboard poke enamel
                  pin kitsch bushwick. Meditation franzen kale chips, art party
                  YOLO artisan seitan sustainable stumptown yr banh mi Venmo
                  letterpress coloring book, vice chartreuse tattooed umami
                  literally forage JOMO direct trade helvetica ennui cray
                  taiyaki. Williamsburg jianbing pork belly hella. Put a bird on
                  it banjo raw denim, 90's semiotics echo park cornhole keffiyeh
                  tattooed JOMO slow-carb pork belly try-hard kickstarter ugh.
                  Dreamcatcher sustainable copper mug, hell of retro quinoa same
                  VHS selvage chambray. Church-key vaporware lo-fi sus vice
                  kinfolk schlitz art party skateboard tacos vape. Activated
                  charcoal thundercats retro salvia green juice paleo irony vape
                  vinyl affogato fingerstache mustache polaroid neutra. Coloring
                  book organic tumeric jean shorts deep v aesthetic pok pok
                  everyday carry, food truck paleo gochujang shabby chic
                  wayfarers before they sold out.
                </Spoiler>
              </div>
            </div>
            <TextInput
              className={styles.postCommentInput}
              placeholder="Add Comment"
              radius={"30px"}
              color="#eeeeee"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
