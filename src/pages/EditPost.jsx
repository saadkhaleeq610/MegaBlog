import React, {useEffect, useState} from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPost(){
    const [post, setPost] = useState(null)
    const navigate = useNavigate();
    const {slug} = useParams();
    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                } else {
                    navigate('/')
                }
            })
        } else {

        }
    }, [slug, navigate])
    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post}/>
            </Container>                          
        </div>
    ) : null
}