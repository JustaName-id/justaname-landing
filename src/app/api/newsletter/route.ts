import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  try {
    console.log("Subscribing to newsletter:", email);
    const response = await fetch(`${process.env.STRAPI_API_URL}/api/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          email,
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({ success: true, data });
    } else {
      const error = await response.json();
      return NextResponse.json(
        { success: false, error },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
