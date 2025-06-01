import footRepo from "@/app/repo/foot-repo";

export async function DELETE(request,{params}){
    const response = await footRepo.deleteTeam(params.teamId)
    return Response.json(,{status:200})
}