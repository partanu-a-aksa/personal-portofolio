import Link from "next/link";

export function NavLink(props: { linkHref: string; linkContent: string }) {
  console.log(props);
  return <Link href={props.linkHref}>{props.linkContent}</Link>;
}
