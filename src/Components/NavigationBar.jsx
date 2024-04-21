import React, { useState } from "react";
import styles from "../scss/NavigationBar.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import Cookies from "js-cookie"
import {
  Group,
  Burger,
  rem,
  UnstyledButton,
  Image,
  Button,
  Menu,
  TextInput,
  Anchor,
  Popover,
  Autocomplete,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSearch,
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import NotiDropDown from "./NotiDropDown.jsx";
import { useAuth } from "../hooks/useAuth";
import NewPostModal from "../Components/ProfilePageComponents/NewPostModal.jsx";
import NewEventModal from "./ProfilePageComponents/NewEventModal.jsx";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { profileAthlete } from "../Services/ProfileAPI.js";
import { postSearch } from "../Services/HomeAPI.js";
export default function NavigationBar({ user, updateteir , category, setCategory, id , setId }) {
  const [isLogin, setIsLogin] = useState(true);
  const [menuOpened, setmenuOpened] = useState(false);
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const form = useForm({
    initialValues: {
      tosearch: "",
    },
  });
  const mutation = useMutation({
    mutationFn: postSearch,
    onSuccess: (data) => {
      setId(data.data.search_id)
            queryClient.invalidateQueries({ queryKey: ["search", id]})
    },
  });
  const username = Cookies.get("auth_username");
  const { logout } = useAuth();
  const search = (e) => {
    console.log(category,e.tosearch)
    mutation.mutate({ type: category, data: e.tosearch });
    navigate("/search/" + e.tosearch);
   
      
    };

  const signout = () => {
    logout();
  };
  const gopro = () => {
    navigate("/subscription");
  };
  const home = () => {
    navigate("/home");
  };
  const chat = () => {
    navigate("/chat");
  };
  const calendar = () => {
    navigate("/calendar");
  };
  const profile = () => {
    if (user.role === "athlete") {
      navigate("/athleteprofile/"+username);
    }
    if (user.role === "scout") {
      navigate("/scoutprofile/"+username);
    }
    if (user.role === "admin") {
      navigate("/orgprofile/" +username);
    }
  };
  const friendlist = () => {
    navigate("/friend");
  };
  const body = () => {
    navigate("/bodyanalyzer");
  };
  const [NewPostModalOpened, NewPost] = useDisclosure(false);
  const [NewEventModalOpened, NewEvent] = useDisclosure(false);
  
  const query = useQuery({ queryKey: ["newevent",username], queryFn: ()=> profileAthlete(username) });
  var club_name;
  if (query.status === "success" ){
    if(query.data.data.role==='admin'){
    club_name = query.data.data.organization.club_name;
    Cookies.set("orgname", query.data.data.organization.club_name);
    }
    
  
  return (
    <header className={styles.container}>
      
        <NewPostModal
          opened={NewPostModalOpened}
          onClose={NewPost.close}
          user={user}
          profilepic = {query.data.data.profile_picture}
        />

     
      
        <NewEventModal
          opened={NewEventModalOpened}
          onClose={NewEvent.close}
          user={user}
          club={club_name}
          profilepic = {query.data.data.profile_picture}
        />
      

      <div>
      <UnstyledButton onClick={home}>
      <Image
      className={styles.headerText}
            h={48}
            w="auto"
            src="../../public/Images/athcess.png"
          />
      </UnstyledButton>
      
      </div>
      <form
        className={styles.search}
        onSubmit={form.onSubmit((values) => search(values))}>
        <Autocomplete
          className={styles.search}
          placeholder="Search"
          radius="20px"
          limit={3}
          //data={["Football 1", "Basketball 1", "Basketball 2", "Football 2"]}
          comboboxProps={{ zIndex: 1000, offset: 2 }}
          onChange={(event) => form.setFieldValue("tosearch", event)}
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          visibleFrom="xs"
        />
      </form>
      <UnstyledButton onClick={calendar}>
        <Image src="/Images/calendar_logo.png" className={styles.image} />
      </UnstyledButton>
      <UnstyledButton onClick={chat}>
        <Image src="/Images/chat_logo.png" className={styles.image} />
      </UnstyledButton>

      <Popover width={400} withArrow shadow="md" position="bottom-start">
        <Popover.Target>
          <UnstyledButton>
            <Image src="/Images/noti_logo.png" className={styles.image} />
          </UnstyledButton>
        </Popover.Target>
        <Popover.Dropdown>
          <NotiDropDown></NotiDropDown>
        </Popover.Dropdown>
      </Popover>
      {isLogin ? (
        <UnstyledButton onClick={profile}>
          <Image
            src={query.data.data.profile_picture== null ? "/Images/defualt_profile.png": query.data.data.profile_picture}
            className={styles.profileImage}
          />
        </UnstyledButton>
      ) : (
        <div style={{ width: 220 }}>
          <Button
            fullWidth
            variant="white"
            color="#007458"
            size="md"
            radius="xl"
            component="a"
            href="/signin">
            Sign in
          </Button>
        </div>
      )}
      <Menu offset={20} className={styles.menu}>
        <Menu.Target>
          <Burger
            className={styles.burger}
            color="white"
            // opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </Menu.Target>
        <Menu.Dropdown>
          {user.role === "athlete" || user.role === "scout" ? (
            <Menu.Item
              onClick={NewPost.open}
              leftSection={
                <Image
                  src="/Images/MenuBar/add_logo.png"
                  style={{ width: rem(32), height: rem(32) }}></Image>
              }>
              Post
            </Menu.Item>
          ) : (
            <Menu.Item
              onClick={NewEvent.open}
              leftSection={
                <Image
                  src="/Images/MenuBar/add_logo.png"
                  style={{ width: rem(32), height: rem(32) }}></Image>
              }>
              Event
            </Menu.Item>
          )}

          <Menu.Divider />
          <Menu.Item
            onClick={friendlist}
            leftSection={
              <Image
                src="/Images/MenuBar/friend_logo.png"
                style={{ width: rem(32), height: rem(32) }}></Image>
            }>
            Friends
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item
            onClick={body}
            leftSection={
              <Image
                src="/Images/MenuBar/body_logo.png"
                style={{ width: rem(32), height: rem(32) }}></Image>
            }>
            Body Analyzer
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item
            onClick={signout}
            leftSection={
              <Image
                src="/Images/MenuBar/logout_logo.png"
                style={{ width: rem(32), height: rem(32) }}></Image>
            }>
            Logout
          </Menu.Item>

          {!user.teir && user.role === "scout" && (
            <>
              <Menu.Divider />
              <Menu.Item
                style={{
                  color: "gold",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: rem(24),
                }}
                onClick={gopro}
                className={styles.gopro}>
                GO PRO
              </Menu.Item>
            </>
          )}
          {user.teir && user.role === "scout" && (
            <>
              <Menu.Divider />
              <Menu.Item onClick={() => navigate("/subscription")}>
                Manage subscription
              </Menu.Item>
            </>
          )}
        </Menu.Dropdown>
      </Menu>
    </header>
  );
}
}