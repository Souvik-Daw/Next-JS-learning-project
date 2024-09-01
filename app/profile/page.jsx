"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();

  const [myPosts, setMyPosts] = useState([]);
  var temp = [
    {
      prompt:"Vodka martini, shaken not stir with a lemon peal",
      tag:"vesper",
      creator:{
        username:"james bond",
        email:"jamesbond007@gmail.com",
        image:"/assets/images/logo.svg"
      }
    },
    {
      prompt:"Vodka martini, shaken not stir with a lemon peal",
      tag:"vesper",
      creator:{
        username:"james bond",
        email:"jamesbond007@gmail.com",
        image:"/assets/images/logo.svg"
      }
    },
    {
      prompt:"Vodka martini, shaken not stir with a lemon peal",
      tag:"vesper",
      creator:{
        username:"james bond",
        email:"jamesbond007@gmail.com",
        image:"/assets/images/logo.svg"
      }
    }
  ]

  useEffect(() => {
    const fetchPosts = async () => {
      
      setMyPosts(temp);
    };

    fetchPosts
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={temp}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
