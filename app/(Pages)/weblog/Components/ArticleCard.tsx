import { Flex } from "@radix-ui/themes";
import AvatarImage from "./AvatarImage";
import Date from "./Date";
import Title from "./Title";
import Summary from "./Summary";
import Categories from "./Categories";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Link from "next/link";
// ----------------------------------------------
export interface IAppProps {
	src?: string;
	alt?: string;
	date?: string;
	categories?: string;
	title?: string;
	summary?: string;
}
export default function App(props: IAppProps) {
	return (
    <ErrorBoundary fallback={<p>Something went wrong ArticleCard</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <Flex gap={"4"}>
          {/* Avatar */}
          <Link href="/weblog">
            <AvatarImage
              src={props.src || "/blakfy-orginal-icon.jpg"}
              alt={props.alt || "blakfy"}
              fallback="IMG"
            />
          </Link>
          <Flex direction={"column"} wrap={"wrap"}>
            <Flex gap={"2"} wrap={"wrap"}>
              <Date date={props.date || "Mar 01 2024"} />
              <Categories category={props.categories || "Technology"} />
            </Flex>

            <Flex direction={"column"} gap={"2"}>
              <Title title={props.title || "The future of technology"} />
              <Summary summary={props.summary || "This is summary"} />
            </Flex>
          </Flex>
        </Flex>
      </Suspense>
    </ErrorBoundary>
  );
}
