export class Activity /* extends android.support.v7.app.AppCompatActivity */ {
    onBackPressed(): void;
    onRequestPermissionsResult(requestCode: number, permissions: Array<String>, grantResults: Array<number>): void;
    log(msg: string): void;
}