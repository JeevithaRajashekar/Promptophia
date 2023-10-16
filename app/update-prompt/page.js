'use client';
import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UpdatePrompt = () => {

  const { data: session } = useSession();
  const router = useRouter();
  const searchparams = useSearchParams();
  const promptId = searchparams.get('id');

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  useEffect(() => {
    const getPromptDetails = async () => {
        const response = await fetch(`/api/prompt/${promptId}/`);
        const data = await response.json();
        console.log(`@@@@@@@@@@@${post}`)
        setPost(data);
    }
  if(promptId) getPromptDetails();

  }, [promptId])

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
        const respopnse = await fetch(`/api/prompt/${promptId}`,{
            method: 'PATCH',
            body: JSON.stringify({
                prompt: post.prompt,
                tag: post.tag
            })
        });
        
        if(respopnse.ok){
            router.push("/");
        }

    } catch (error) {
        console.log(error);
    } finally {
        setIsSubmitting(false)
    }
  }
  
  return (
    <Form 
        type="Edit"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updatePrompt}
    />
  )
}

export default UpdatePrompt;