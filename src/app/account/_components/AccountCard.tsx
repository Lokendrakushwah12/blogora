"use client";
import { useUserDetails } from "@/api/userDetailsApi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/authContext";

const AccountCard = () => {
  const { token } = useAuth();
  const { data: user } = useUserDetails(token);

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
            <div className="flex h-9 w-full items-center rounded-md border bg-accent/10 p-3 text-start text-sm text-muted-foreground">
              {user?.name ?? "Loading..."}
            </div>
          </div>
          <div className="place-items-start space-y-1">
            <Label htmlFor="email">Email</Label>
            <div className="flex h-9 w-full items-center rounded-md border bg-accent/10 p-3 text-start text-sm text-muted-foreground">
              {user?.email ?? "Loading..."}
            </div>
          </div>
        </CardContent>
        <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
      </div>
    </Card>
  );
};

export default AccountCard;
