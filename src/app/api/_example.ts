// Next.js API 라우터 예시
import { NextRequest, NextResponse } from "next/server";

// GET 요청 처리
export async function GET(req: NextRequest) {
  // 쿼리 파라미터 가져오기
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  try {
    console.log(`요청된 URL: ${url}`);
    return NextResponse.json({ data: "GET 요청 성공", url }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "GET 요청 처리 실패" }, { status: 500 });
  }
}

// POST 요청 처리
export async function POST(req: NextRequest) {
  try {
    // 요청 본문 데이터 받기
    const body = await req.json();
    console.log('받은 데이터:', body);
    
    return NextResponse.json({ 
      message: "POST 요청 성공", 
      receivedData: body 
    }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "POST 요청 처리 실패" }, { status: 500 });
  }
}

// PUT 요청 처리
export async function PUT(req: NextRequest) {
  try {
    // 요청 본문 데이터 받기
    const body = await req.json();
    
    return NextResponse.json({ 
      message: "PUT 요청 성공", 
      updatedData: body 
    }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "PUT 요청 처리 실패" }, { status: 500 });
  }
}

// DELETE 요청 처리
export async function DELETE(req: NextRequest) {
  // 쿼리 파라미터 가져오기
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    return NextResponse.json({ 
      message: "DELETE 요청 성공", 
      deletedId: id 
    }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "DELETE 요청 처리 실패" }, { status: 500 });
  }
}
