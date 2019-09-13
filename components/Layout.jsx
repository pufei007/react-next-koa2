import { Button } from "antd";
import Link from "next/link";
export default ({ children }) => (
  <>
    <header>
      <Link href="/a?id=1" as="/a/1">
        <Button>a page</Button>
      </Link>
      <Link href="/b?id=2" as="/b/2">
        <Button>b page</Button>
      </Link>
    </header>
    {children}
  </>
);
