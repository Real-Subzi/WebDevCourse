import AccountsRepo from "@/app/repo/accounts-repo";
const accountsRepo = new AccountsRepo();

export async function GET(request) {
    const {searchParams} = new URL(request.url);
    const type = searchParams.get("type");
    const accounts = await accountsRepo.getAccounts(type);
    return Response.json(accounts, { status: 200 })
}
export async function PUT(request) {
    return Response.json({ message: "Welcome to /api/accounts PUT method" }, { status: 200 })
}
export async function DELETE(request) {
    return Response.json({ message: "Welcome to /api/account DELETE method" }, { status: 200 })
}
export async function POST(request) {
    return Response.json({ message: "Welcome to /api/account POST method" }, { status: 200 })
}