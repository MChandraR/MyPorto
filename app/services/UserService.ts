import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/domain/User";

export interface LoginResult {
  success: boolean;
  token?: string;
  user?: User;
  error?: string;
}

export class UserService {
  /**
   * Validates user credentials and generates a mock session token.
   */
  public static async login(username: string, password: string): Promise<LoginResult> {
    try {
      console.log(`[UserService] Login attempt for username: ${username}`);
      const userDb = await UserRepository.findByUsername(username);

      if (!userDb) {
        return {
          success: false,
          error: "User not found",
        };
      }

      // Check credentials
      // Note: In a real-world scenario, we would use a library like bcrypt or argon2 to compare hashed passwords.
      // However, to support the direct mock credentials created in MongoDB Atlas:
      const passwordMatches = userDb.password === password;

      if (!passwordMatches) {
        return {
          success: false,
          error: "Incorrect password",
        };
      }

      // Generate a mock auth token
      const domainUser = UserRepository.toDomain(userDb);
      const generatedToken = `auth-session-${domainUser.id}-${Date.now().toString(16)}`;

      return {
        success: true,
        token: generatedToken,
        user: domainUser,
      };
    } catch (err) {
      console.error("[UserService] Login error:", err);
      return {
        success: false,
        error: "Internal server error occurred",
      };
    }
  }
}
