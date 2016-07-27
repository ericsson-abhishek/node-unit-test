module.exports  = function ()
{
	this.id=0;
	this.increament = function()
	{
		this.id+=1;
	}
	this.print  = function ()
	{
		console.log(this.id);
	}
}