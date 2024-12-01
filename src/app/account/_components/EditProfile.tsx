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

const EditProfile = () => {
  return (
    <Card className="flex flex-col items-center justify-start">
      <div className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Edit profile</CardTitle>
          <CardDescription>
            Update your profile information here. Click save when you&apos;re done.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full space-y-2">
          <div className="place-items-start space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="place-items-start space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue="peduarte@example.com" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default EditProfile;
