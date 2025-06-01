import BooksRepo from '@/app/repo/BooksRepo.js'

export async function GET(request){
    const summary = await BooksRepo.getBooksSummary();
    console.log(summary);
    return Response.json(summary,{status: 200});
}