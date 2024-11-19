import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

export function AuthForm() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Login</TabsTrigger>
        <TabsTrigger value="password">Registration</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <LoginForm />
      </TabsContent>
      <TabsContent value="password">
        <RegistrationForm />
      </TabsContent>
    </Tabs>
  );
}
