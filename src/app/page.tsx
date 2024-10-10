import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

export default function IndexPage() {
	return (
		<main className="maxw-prose container grid items-center gap-6 space-y-4 text-balance pb-8 pt-6 md:py-10">
			<NavigationMenu>
				<NavigationMenuList>
					{navigation.map((item) => (
						<NavigationMenuItem key={item.name}>
							<Link href={item.href}>
								<NavigationMenuLink
									className={navigationMenuTriggerStyle()}
								>
									{item.name}
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					))}
					<NavigationMenuItem key="theme">
						<ThemeToggle />
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</main>
	);
}
