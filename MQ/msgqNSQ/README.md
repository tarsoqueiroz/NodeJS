# NSQ

## Docker's containers

1. NSQ lookupd

sudo docker run --name nsqlookupd -p 4160:4160 -p 4161:4161 nsqio/nsq /nsqlookupd

2. NSQ daemon

sudo docker run --name nsqd -p 4150:4150 -p 4151:4151 nsqio/nsq /nsqd --broadcast-address=< ip addr >  --lookupd-tcp-address=< ip addr >:4160

3. NSQ admin

sudo docker run --name nsqadmin -p 4171:4171 nsqio/nsq /nsqadmin -lookupd-http-address < ip addr >:4161

