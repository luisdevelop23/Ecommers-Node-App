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
//
export class DuplicityName extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DuplicityName";
  }
}


