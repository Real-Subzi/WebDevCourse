import footRepo from "@/app/repo/foot-repo.js";

export async function GET(request){
    const teams = await footRepo.getTeams();
    return Response.json(teams,{status:200})
}

export async function POST(request){
    const team = await request.json();
    const newTeam = await footRepo.addTeam(team);
    return Response.json(newTeam,{status:200})
}