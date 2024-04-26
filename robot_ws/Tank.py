# import curses and GPIO
import curses
import RPi.GPIO as GPIO

GPIO.setwarnings(False)

#set GPIO numbering mode and define output pins
GPIO.setmode(GPIO.BOARD)

motor1a = 7
motor1b = 11
motor1e = 22

motor2a = 13
motor2b = 16
motor2e = 15

GPIO.setup(motor1a,GPIO.OUT)
GPIO.setup(motor1b,GPIO.OUT)
GPIO.setup(motor1e,GPIO.OUT)
GPIO.setup(motor2a,GPIO.OUT)
GPIO.setup(motor2b,GPIO.OUT)
GPIO.setup(motor2e,GPIO.OUT)

# Get the curses window, turn off echoing of keyboard to screen, turn on
# instant (no waiting) key response, and use special values for cursor keys
screen = curses.initscr()
curses.noecho()  
curses.cbreak()
curses.halfdelay(3)
screen.keypad(True)

try:
    while True:   
        char = screen.getch()
        if char == ord('q'):
            break
        elif char == curses.KEY_UP:
            GPIO.output(motor1a,GPIO.HIGH)
            GPIO.output(motor1b,GPIO.LOW)
            GPIO.output(motor1e,GPIO.HIGH)
            GPIO.output(motor2a,GPIO.HIGH)
            GPIO.output(motor2b,GPIO.LOW)
            GPIO.output(motor2e,GPIO.HIGH)
        elif char == curses.KEY_DOWN:
            GPIO.output(motor1a,GPIO.LOW)
            GPIO.output(motor1b,GPIO.HIGH)
            GPIO.output(motor1e,GPIO.HIGH)
            GPIO.output(motor2a,GPIO.LOW)
            GPIO.output(motor2b,GPIO.HIGH)
            GPIO.output(motor2e,GPIO.HIGH)
        elif char == curses.KEY_RIGHT:
            GPIO.output(motor1a,GPIO.HIGH)
            GPIO.output(motor1b,GPIO.LOW)
            GPIO.output(motor1e,GPIO.HIGH)
            GPIO.output(motor2a,GPIO.LOW)
            GPIO.output(motor2b,GPIO.HIGH)
            GPIO.output(motor2e,GPIO.HIGH)
        elif char == curses.KEY_LEFT:
            GPIO.output(motor1a,GPIO.LOW)
            GPIO.output(motor1b,GPIO.HIGH)
            GPIO.output(motor1e,GPIO.HIGH)
            GPIO.output(motor2a,GPIO.HIGH)
            GPIO.output(motor2b,GPIO.LOW)
            GPIO.output(motor2e,GPIO.HIGH)
        elif char == 10:
            GPIO.output(motor1a,GPIO.LOW)
            GPIO.output(motor1b,GPIO.LOW)
            GPIO.output(motor1e,GPIO.LOW)
            GPIO.output(motor2a,GPIO.LOW)
            GPIO.output(motor2b,GPIO.LOW)
            GPIO.output(motor2e,GPIO.LOW)
             
finally:
    #Close down curses properly, inc turn echo back on!
    curses.nocbreak(); screen.keypad(0); curses.echo()
    curses.endwin()
    GPIO.cleanup()