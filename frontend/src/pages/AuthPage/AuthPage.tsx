import LoginForm from "@/components/shared/LoginForm";
import RegistrationForm from "@/components/shared/RegistrationForm";
import Container from "@/components/ui/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
function AuthPage() {
  return (
    <Container className="flex items-center justify-center h-screen">
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
    </Container>
  );
}

export default AuthPage;
