export default interface IMessage {
    content: string;
    duration: number;
    severity?: 'error' | 'warning' | 'info';
}