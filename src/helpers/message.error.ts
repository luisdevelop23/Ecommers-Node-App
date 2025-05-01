export class FileUploadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FileUploadError";
  }
}

export class DatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DatabaseError";
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export class ErrorRuc extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ErrorRuc";
  }
}

export class DuplicityRuc extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DuplicityRuc";
  }
}

export class NotFound extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFound";
  }
}

export class BadCredentialsError extends Error {
  result: boolean;
  errorCode: string;

  constructor(message: string, details?: any) {
    super(message);
    this.result = false;
    this.errorCode = details?.errorCode || "BAD_CREDENTIALS";
    this.message = message || "Credenciales incorrectas.";
    if (details) {
      Object.assign(this, details); // Permite agregar detalles adicionales a la excepción
    }
  }
}

//
export class DuplicityName extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DuplicityName";
  }
}
