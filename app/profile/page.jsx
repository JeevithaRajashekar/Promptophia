'use client';

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Profile from "@components/Profile";
import { useRouter } from "next/navigation";


const MyProfile = () => {

    const {data: session} = useSession();
    const router =  useRouter();
    const [allposts, setallposts] = useState([])


    useEffect(() => {
      const fetchPosts = async() => {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();
        console.log(data);
        setallposts(data);
      }
      fetchPosts();
    }, [])
    
    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
        const hasConfirmed = confirm('Are you sure you want to delete the post?');
        if(hasConfirmed){
            try {
                await fetch(`/api/prompt/${post._id.toString()}`,{
                    method: 'DELETE'
                })
                const filteredPosts = allposts.filter(item => item._id !== post._id);
                setallposts(filteredPosts);
                
            } catch (error) {
                console.log(error);
            }
        }
    }
  return (
    <Profile
        name="My"
        desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
        data={allposts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile;