import Date from "@components/Date";
import Link from "next/link";
import { List, Title, Subtitle } from "./custom-tw-components";

const PostList = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <List key={`${post.lang}-${post.slug}`}>
                    <Link href={`/blog/${post.lang}/${post.slug}`} passHref>
                        <Title>
                            {post.lang == "ko" && (
                                <span>π°π·</span>
                            )}
                            {post.lang == "ja" && (
                                <span>π―π΅</span>
                            )}
                            {post.lang == "en" && (
                                <span>πΊπΈ</span>
                            )}
                            &nbsp; &nbsp;
                            {post.title}
                        </Title>
                    </Link>
                    <Subtitle>
                        {post.subtitle} &nbsp;
                        <Date dateString={post.date} customClass={"italic text-sm break-normal inline-block"} />
                    </Subtitle>
                </List>
            ))}
        </>
    )
}

export default PostList;