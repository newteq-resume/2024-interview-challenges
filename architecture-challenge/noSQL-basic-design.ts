class User {
    UserId: number;
    FirstName: string;
    LastName: string;
    PreferredName: string | null;
    EmailAddress: string;
}

class Drawing {
    DrawingId: number;
    File: string | byte[];
}

class Project {
    ProjectId: number;
    ProjectName: string;
}

class DrawingPackUser {
    DrawingPackId: number;
    DrawingPackName: string;
    UserId: number;
    ProjectId: number;
    Drawings: [{
        DrawingId: number;
    }] | Drawing[];
}

class DrawingPackNotification {
    DrawingPackNotificationId: number;
    DrawingPackId: number;
    UserId: number;
    HasViewed: boolean;
    HasDownloaded: boolean;
    DownloadDetails: [{
        DateTime: Date
    }]
}

class DrawingPackEmail {
    DrawingPackEmailId: number;
    DrawingPackId: number;
    UserId: number;
    SentSuccessful: boolean;
    QueueDateTime: Date;
    SentDateTime: Date | null;
}


//=================================================================================================
// Alternative
//=================================================================================================

class User2 {
    UserId: number;
    FirstName: string;
    LastName: string;
    PreferredName: string | null;
    EmailAddress: string;
}

class Drawing2 {
    DrawingId: number;
    File: string | byte[];
}

class Project2 {
    ProjectId: number;
    ProjectName: string;
}

class DrawingPackUser2 {
    DrawingPackId: number;
    DrawingPackName: string;
    User: User2;
    Project: Project2;
    Drawings: Drawing2[];
}

class DrawingPackNotification2 {
    DrawingPackNotificationId: number;
    DrawingPackUser: DrawingPackUser2;
    HasViewed: boolean;
    HasDownloaded: boolean;
    DownloadDetails: [{
        DateTime: Date
    }]
}

class DrawingPackEmail2 {
    DrawingPackEmailId: number;
    DrawingPackUser: DrawingPackUser2;
    SentSuccessful: boolean;
    QueueDateTime: Date;
    SentDateTime: Date | null;
}