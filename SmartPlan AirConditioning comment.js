1. 
A. //Refrigerator
B. Air conditioning

2.
		
3.
Class Air conditioning
	State
		_name: String
		_status: Boolean
		_temperature: Number // (15 <= _temperature <= 35)
	Behavior
      getName(): String
      
		getStatus(): Boolean
		on(): void
		off(): void
		
      increaseTemperature(): void
		decreaseTemperature(): void
		setTemperature(Number): void
      getTemperature(): Number
      
/*Class Refrigerator
	State
		_name: String // <-- !!!
      _status: Boolean (true, false)
		_temperature: number
		_temperatureMode: string
		_productsLoadLevel: string
		
	Behavior	
      getName(): string
		getStatus(): string
		on(): void
		off(): void
		increaseTemperature(): void
		decreaseTemperature(): void
		getTemperatureMode(): string
		setTemperatureMode(): string // где парамтер? почему возвращается string?
		orderProducts(): string*/		
		
		
		
		
		