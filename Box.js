class Box
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.status='';
    }
    setStatus(status)
    {
        this.status=status;
    }
    getStatus()
    {
        return this.status;
    }
}