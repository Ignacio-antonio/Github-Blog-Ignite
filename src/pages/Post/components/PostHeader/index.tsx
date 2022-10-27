import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { Spinner } from "../../../../components/Spinner";
import { RelativeDateFormatter } from "../../../../utils/formatter";
import { IPost } from "../../../Blog";
import { PostHeaderContainer } from "./styles";

interface PostHeaderProps {
    postData: IPost;
    isLoading: boolean;
}

export function PostHeader( { postData, isLoading }: PostHeaderProps) {
    const navigate = useNavigate();
    
    function goBack() {
        navigate(-1)
    }

    const formattedDate = RelativeDateFormatter(postData?.created_at);

    return (
        <PostHeaderContainer>
            {isLoading ? <Spinner /> : (
                <>
                    <header>
                        <ExternalLink 
                        as="button"
                        onClick={goBack} 
                        variant="iconLeft" 
                        icon={<FontAwesomeIcon 
                        icon={faChevronLeft} />} 
                        text="Voltar" 
                        />
                        <ExternalLink text="Ver no Github" href={postData.html_url} target="_blank"/>
                    </header>

                    <h1>{postData.title}</h1>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faGithub} />
                            {postData.user.login}
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCalendar} />
                             {formattedDate}
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faComment} />
                            {postData.comments} Comentários
                        </li>
                    </ul>
                </>
            )}
        </PostHeaderContainer>
    )
}