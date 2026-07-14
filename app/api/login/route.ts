import { NextResponse } from "next/server";
import { UserService } from "../../services/UserService";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password are required" },
        { status: 400 }
      );
    }

    const result = await UserService.login(username, password);

    if (result.success && result.token) {
      return NextResponse.json({
        message: "Login successful",
        token: result.token,
        user: result.user,
      });
    } else {
      return NextResponse.json(
        { message: result.error || "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (err) {
    console.error("[API Login] Route error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
