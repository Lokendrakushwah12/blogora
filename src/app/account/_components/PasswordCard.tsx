import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PasswordCard = () => {
  return (
    <Card className="flex flex-col items-center justify-start">
      <div className="max-w-lg w-full">
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
        Change your password here. After saving, you&apos;ll be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full space-y-2">
        <div className="place-items-start space-y-1">
        <Label htmlFor="current">Current password</Label>
        <Input id="current" type="password" />
        </div>
        <div className="place-items-start space-y-1">
        <Label htmlFor="new">New password</Label>
        <Input id="new" type="password" />
        </div>
      </CardContent>
      <CardFooter>
      <Button>Save password</Button>
      </CardFooter>
      </div>
    </Card>
  );
};

export default PasswordCard;
