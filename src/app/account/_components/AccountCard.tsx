import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const AccountCard = () => {
  return (
    <Card className="flex flex-col items-center justify-start outline-0">
      <div className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you&apos;re done.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full space-y-2">
          <div className="place-items-start space-y-1">
            <Label htmlFor="name">Name</Label>
            <div className="h-9 border w-full text-start rounded-md text-sm flex p-3 bg-accent/10 text-muted-foreground items-center">Pedro Duarte</div>
          </div>
          <div className="place-items-start space-y-1">
            <Label htmlFor="email">Email</Label>
            <div className="h-9 border w-full text-start rounded-md text-sm flex p-3 bg-accent/10 text-muted-foreground items-center">peduarte@example.com</div>
          </div>
        </CardContent>
        <CardFooter>
          {/* <Button>Save changes</Button> */}
        </CardFooter>
      </div>
    </Card>
  );
};

export default AccountCard;
