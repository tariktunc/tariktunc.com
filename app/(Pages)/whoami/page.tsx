import Link from "next/link";
import Image from "next/image";
import { Section, Text, Heading, Flex, Container, Box } from "@radix-ui/themes";

import WhoAmI from "@/app/Components/WhoAmI/WhoAmI";

export default function Home() {
	return (
		<Box>
			{/* HEADER WHO AM I IMAGE  */}
			<Section size={"1"}>
				<Flex align={"center"} justify={"center"}>
					<Image
						src="/whoami.webp"
						width={800}
						height={800}
						alt="blakfy.com"
						className="rounded-lg"
					/>
				</Flex>
			</Section>

			{/* WHO AM I ?  */}
			<WhoAmI />
			{/* Technologies */}
			<Section size={"1"}>
				<Heading as="h5" mt={"5"}>
					Programming languages I speak
				</Heading>
				<Text as="p">
					I have honed my skills across a wide array of technologies,
					constantly expanding my toolkit to stay at the forefront of the
					industry. My expertise includes:
				</Text>
				<Flex align={"center"} gap={"2"} height={"6"}>
					<Text as="p" weight="bold">
						Front-End Development:
					</Text>
					<Image
						src="https://skillicons.dev/icons?i=html"
						alt="HTML"
						width={25}
						height={25}
					/>{" "}
					<Image
						src="https://skillicons.dev/icons?i=css"
						alt="HTML"
						width={25}
						height={25}
					/>
					<Image
						src="https://skillicons.dev/icons?i=javascript"
						alt="HTML"
						width={25}
						height={25}
					/>
					<Image
						src="https://skillicons.dev/icons?i=react"
						alt="HTML"
						width={25}
						height={25}
					/>
					<Image
						src="https://skillicons.dev/icons?i=next"
						alt="HTML"
						width={25}
						height={25}
					/>
					<Image
						src="https://skillicons.dev/icons?i=redux"
						alt="HTML"
						width={25}
						height={25}
					/>
				</Flex>
				<Flex align={"center"} gap={"2"} height={"6"}>
					<Text as="p" weight="bold">
						Styling:
					</Text>
					<Image
						src="https://skillicons.dev/icons?i=tailwindcss"
						alt="HTML"
						width={25}
						height={25}
					/>
					<Image
						src="https://skillicons.dev/icons?i=sass"
						alt="HTML"
						width={25}
						height={25}
					/>
					<Image
						src="https://skillicons.dev/icons?i=scss"
						alt="HTML"
						width={25}
						height={25}
					/>
				</Flex>
				<Flex align={"center"} gap={"2"} height={"6"}>
					<Text as="p" weight="bold">
						Back-End Development:
					</Text>
					<Image
						src="https://skillicons.dev/icons?i=express"
						alt="HTML"
						width={25}
						height={25}
					/>
					<Image
						src="https://skillicons.dev/icons?i=c"
						alt="HTML"
						width={25}
						height={25}
					/>
				</Flex>
				<Flex align={"center"} gap={"2"} height={"6"}>
					<Text as="p" weight="bold">
						Database Management:
					</Text>
					<Image
						src="https://skillicons.dev/icons?i=mongodb"
						alt="HTML"
						width={25}
						height={25}
					/>
				</Flex>
			</Section>

			{/* Lest Connect */}
			<Section size={"1"}>
				<Heading as="h6">Let&apos;s Connect!</Heading>
				<Text as="p" weight={"light"}>
					You can also email me at{" "}
					<Link href="mailto:me@tariktunc.com?subject=Web%20Sitemiz%20Hakkında&body=Merhaba,%20web%20sitenizle%20ilgili%20bir%20soruyum%20var.">
						<b>me@tariktunc.com</b>
					</Link>{" "}
					however, don&apos;t expect an immediate reply (or a reply at
					all).
				</Text>
				<Text as="p" weight={"light"}>
					Thanks for stopping by. May the source be with you 🦄, Tarik.
				</Text>
			</Section>
		</Box>
	);
}
