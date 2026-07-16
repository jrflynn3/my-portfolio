import { auth, signIn, signOut } from "@/auth";
import { GhostButton } from "@/Components/common";
import { AdminPostForm } from "./AdminPostForm";

export default async function AdminPage() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-primary px-5 md:px-10 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold pb-6">Admin</h1>
        {!session ? (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button type="submit">
              <GhostButton text="Sign in with GitHub" />
            </button>
          </form>
        ) : (
          <div className="flex flex-col gap-4 items-start">
            <p className="font-thin">
              Signed in as <span>{session.user?.name}</span>
            </p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit">
                <GhostButton text="Sign out" />
              </button>
            </form>
            <AdminPostForm />
          </div>
        )}
      </div>
    </div>
  );
}
